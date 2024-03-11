import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../context/playerContext';
import Loading from '../../shared/Loading';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { abilitysPlayerValidation } from '../../validations/playerValidation';

const PlayerAbilitys = () => {
  const { player, setPlayer } = useContext(PlayerContext);
  const [ability1, setAbility1] = useState("");
  const [ability5Options, setAbility5Options] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(abilitysPlayerValidation),
    mode: "onSubmit",
    reValidateMode: "onChange"
  });

  useEffect(() => {
    const abilitiesPerType = (type) => {
      if (type === "mage") {
        setAbility1("magic power");
      } else if (type === "sword-man") {
        setAbility1("power");
        setAbility5Options(["sky-walking", "increased-regeneration", "increased-physicality", "divine-speed"]);
      } else if (type === "bow-man") {
        setAbility1("farsightedness");
        setAbility5Options(["sky-walking", "increased-regeneration", "rapid-fire", "divine-speed"]);
      } else if (type === "healer") {
        setAbility1("divine-mercy");
        setAbility5Options(["sky-walking", "increased-regeneration", "multiple-healing", "infinite-mana"]);
      }
    };
    abilitiesPerType(player.playerType);
  }, [player.playerType]);

  const signup = async (data) => {
    setPlayer(data);
    console.log(player);
  };

  return (
    <>
      <Loading on={isSubmitting} />
      <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(signup)}>
          <div className="mb-6">
            <h2 className="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
              {ability1}
            </h2>
          </div>
          {ability5Options.length > 0 && (
            <div className="mb-6">
              <label htmlFor="ability5" className="block text-gray-600 text-sm font-medium mb-2">
                Please choose your special ability
              </label>
              <select
                name='ability5'
                className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                {...register("ability5")}
              >
                {ability5Options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
          >
            Next
          </button>
          {errors.error && <span className='text-red-600'>{errors.error.message}</span>}
        </form>
      </div>
    </>
  );
};

export default PlayerAbilitys;
