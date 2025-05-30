import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo_dark from '../../assets/images/logo-dark.png';
import logo_light from '../../assets/images/logo-light.png';

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accepted: false,
  });

  const [errors, setErrors] = useState({});

  const passwordsMatch = form.password && form.confirmPassword && form.password === form.confirmPassword;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.entries(form).forEach(([key, value]) => {
      if ((key !== 'accepted' && !value.trim()) || (key === 'accepted' && !value)) {
        newErrors[key] = 'Ce champ est requis';
      }
    });

    if (form.password !== form.confirmPassword) {
      newErrors.passwordMatch = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.post('http://localhost:8000/api/register', {
          firstName: form.firstName,
          lastName: form.lastName,
          phone_number: form.phone,
          password: form.password,
        });

        toast.success("Inscription réussie ! Redirection en cours...", {
          position: "top-right",
          autoClose: 2000,
        });

        setTimeout(() => navigate('/connexion'), 2500); 
      } catch (err) {
        if (err.response && err.response.status === 409) {
          toast.error(err.response.data.error || "Numéro déjà utilisé", {
            position: "top-right",
            autoClose: 4000,
          });
        } else {
          toast.error("Une erreur est survenue lors de l'inscription", {
            position: "top-right",
            autoClose: 4000,
          });
        }
      }
    }
  };

  const inputStyle = (name) => {
    if ((name === 'password' || name === 'confirmPassword') && form.password && form.confirmPassword) {
      return passwordsMatch ? 'border-green-500' : 'border-red-500';
    }
    if (errors[name]) return 'border-red-500';
    return '';
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
      <ToastContainer />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
          <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md mx-auto w-full max-w-md">
            <div className="p-6">
              <Link to="#">
                <img src={logo_dark} className="mx-auto h-[24px] block dark:hidden" alt="" />
                <img src={logo_light} className="mx-auto h-[24px] dark:block hidden" alt="" />
              </Link>

              <h5 className="my-6 text-xl font-semibold text-center">Espace Inscription</h5>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: 'Nom :', name: 'lastName', placeholder: 'ANGUILET' },
                    { label: 'Prénom :', name: 'firstName', placeholder: 'Harry' },
                    { label: 'Téléphone :', name: 'phone', placeholder: '+24166621263' },
                    { label: 'Mot de passe :', name: 'password', type: 'password', placeholder: 'Entrez votre mot de passe' },
                    { label: 'Confirmez votre mot de passe :', name: 'confirmPassword', type: 'password', placeholder: 'Confirmez votre mot de passe' },
                  ].map(({ label, name, placeholder, type = 'text' }) => (
                    <div key={name}>
                      <label className="font-semibold block mb-1" htmlFor={name}>{label}</label>
                      <input
                        type={type}
                        name={name}
                        id={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={`form-input mt-1 rounded-md w-full px-4 py-2 border ${inputStyle(name)}`}
                      />
                      {errors[name] && <p className="text-sm text-red-600 font-medium mt-1">{errors[name]}</p>}
                    </div>
                  ))}

                  {form.password && form.confirmPassword && !passwordsMatch && (
                    <p className="text-sm text-red-600 font-medium -mt-2">Les mots de passe ne correspondent pas</p>
                  )}

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="accepted"
                      id="accepted"
                      checked={form.accepted}
                      onChange={handleChange}
                      className="size-4 me-2 accent-green-600 border border-gray-300 dark:border-gray-600"
                    />
                    <label htmlFor="accepted" className="text-sm text-slate-600 dark:text-slate-400">
                      J'accepte <Link to="#" className="text-emerald-600 hover:underline">les Termes Et Conditions</Link>
                    </label>
                  </div>
                  {errors.accepted && <p className="text-sm text-red-600 font-medium">{errors.accepted}</p>}

                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition duration-150"
                  >
                    Inscription
                  </button>

                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Vous avez déjà un compte ?{' '}
                    <Link to="/connexion" className="font-medium text-emerald-600 hover:underline">Connexion</Link>
                  </p>
                </div>
              </form>
            </div>

            <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
              <p className="mb-0 text-gray-400 text-xs font-medium">
                Bonne année © {new Date().getFullYear()}.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
