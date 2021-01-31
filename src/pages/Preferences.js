import React, { Fragment, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";

const Preferences = (props) => {
  const [preferences, setPreferences] = useState({
    miles_needed: "",
    charge_duration: "",
    make: "",
    model: "",
    year: "",
    mileage: "",
    battery_size: "",
  });

  const [error, setError] = useState({
    errorMilesNeeded: false,
    errorChargeDuration: false,
    errorMake: false,
    errorModel: false,
    errorYear: false,
    errorMileage: false,
    errorBatterySize: false,
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ error: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPreferences((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (preferences.miles_needed !== "") {
      setError({ errorMilesNeeded: false });
    }
  };

  const handleSavePreferences = (e) => {
    e.preventDefault();

    if (preferences.miles_needed === "") {
      setError({ errorMilesNeeded: true });
      setErrorMessage({ error: "Miles Needed Required" });
    } else if (preferences.charge_duration === "") {
      setError({ errorChargeDuration: true });
      setErrorMessage({ error: "Charge Duration Required" });
    } else if (preferences.make === "") {
      setError({ errorMake: true });
      setErrorMessage({ error: "Make Required" });
    } else if (preferences.model === "") {
      setError({ errorModel: true });
      setErrorMessage({ error: "Model Needed Required" });
    } else if (preferences.year === "") {
      setError({ errorYear: true });
      setErrorMessage({ error: "Year Required" });
    } else if (preferences.mileage === "") {
      setError({ errorMileage: true });
      setErrorMessage({ error: "Mileage Required" });
    } else if (preferences.battery_size === "") {
      setError({ errorBatterySize: true });
      setErrorMessage({ error: "Battery Size Required" });
    } else {
      axios({
        url: "https://api.allorigins.win/raw?url=https://dev.powerflex.io/test-server/preferences",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          preferences,
        }),
      })
        .then((data) => {
          console.log(data.data.status);
          if (data.errors) {
            setError(true);
          }
          if (data.success === true) {
            setSubmitSuccess(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Fragment>
      <Header page={props.page} />
      <div className="page__bottom-container">
        <h3 className="page__welcome-header">
          Preferences | Current User Preferences
        </h3>
        <form className="preferences__form" onSubmit={handleSavePreferences}>
          {errorMessage.error !== "" ? (
            <div className="preferences__error-msg">{errorMessage.error}</div>
          ) : (
            ""
          )}
          <div className="preferences__container">
            <div className="preferences__input-control">
              <h2>Miles Needed</h2>
              <input
                className={`preferences__input ${
                  error.errorMilesNeeded === true ? "error" : ""
                }`}
                name="miles_needed"
                type="text"
                placeholder="120"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="preferences__input-control">
              <h2>Charge Duration</h2>
              <input
                className={`preferences__input ${
                  error.errorChargeDuration === true ? "error" : ""
                }`}
                name="charge_duration"
                type="text"
                placeholder="12"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="preferences__input-control">
              <h2>Make</h2>
              <input
                className={`preferences__input ${
                  error.errorMake === true ? "error" : ""
                }`}
                name="make"
                type="text"
                placeholder="tesla"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="preferences__input-control">
              <h2>Model</h2>
              <input
                className={`preferences__input ${
                  error.errorModel ? "error" : ""
                }`}
                name="model"
                type="text"
                placeholder="s"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="preferences__input-control">
              <h2>Year</h2>
              <input
                className={`preferences__input ${
                  error.errorYear ? "error" : ""
                }`}
                name="year"
                type="text"
                placeholder="2020"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="preferences__input-control">
              <h2>Mileage</h2>
              <input
                className={`preferences__input ${
                  error.errorMileage ? "error" : ""
                }`}
                name="mileage"
                type="text"
                placeholder="2000"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="preferences__input-control">
              <h2>Battery Size</h2>
              <input
                className={`preferences__input ${
                  error.errorBatterySize ? "error" : ""
                }`}
                name="battery_size"
                type="text"
                placeholder="200"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div className="preferences__button-container">
            <button className="preferences__button-update">
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Preferences;
