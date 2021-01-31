import React, { Fragment, useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";
import Chart from "../components/Chart";

const Sessions = (props) => {
  const [userSessions, setUserSessions] = useState([]);
  const [sessionData, setSessionData] = useState({});

  useEffect(() => {
    return axios
      .get(`https://api.allorigins.win/raw?url=https://dev.powerflex.io/test-server/sessions/`)
      .then((sessions) => {
        setUserSessions(sessions.data);
        const sessionsArr = sessions.data;
          sessions.data.map((id) => {
            axios.get(`https://api.allorigins.win/raw?url=https://dev.powerflex.io/test-server/sessions/${id}`)
              .then((response) => {
                console.log('response', response.data.session.chart_data)
                setSessionData({
                    labels: sessionsArr,
                    datasets: [
                      {
                        label: 'Actual Energy Delivered',
                        data: response.data.session.chart_data.actual_energy_delivered,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)'

                      },
                      {
                        label: 'Predictive Energy Delivered',
                        data: response.data.session.chart_data.predictive_energy_delivered,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)'
                      },
                      {
                        label: 'Time',
                        data: response.data.session.chart_data.time,
                        backgroundColor: 'rgba(255, 255, 255, 0.6)'
                      }
                    ],
                });
              });
          })
      });
  }, []);
  return (
    <Fragment>
      <Header page={props.page} />
      <div className="page__bottom-container">
        <h3 className="page__welcome-header">
          Sessions | Current Users Sessions
        </h3>
        <div className="page__bottom-txt">
          <Chart data={sessionData} />
        </div>
      </div>
    </Fragment>
  );
};

export default Sessions;
