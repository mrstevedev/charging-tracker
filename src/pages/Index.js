import React, { Fragment } from "react";
import { Header } from "../components/Header";

const Index = (props) => {
  return (
    <Fragment>
      <Header page={props.page} />
      <div className="page__bottom-container">
        <div className="page__bottom-txt">
          <h1 className="page__bottom-heading">Tesla Charging Tracker</h1>
          <p>
            As concerns about the impacts of climate change continue to rise, an
            increasing number of commercial and industrial (C&I) energy buyers
            are seeking to improve the sustainability of their operations and
            reduce their carbon footprint by sourcing their electricity from
            renewable generation like wind and solar. This interest represents a
            major opportunity for utilities and other energy providers to
            introduce green tariff offerings or expand their existing green
            tariff to meet customer needs and embrace a clean energy future.
          </p>
          <p>
            Taken in the broadest sense, a green tariff is a program through
            which an energy provider such as an investor-owned utility,
            municipal utility or electric cooperative offers its C&I customers
            the option to contract for a defined amount of renewable generation
            to meet their energy needs.
          </p>
          <p>
            For example, a manufacturer with 100 megawatts (MW) of annual load
            could subscribe to a green tariff under which their electricity
            provider allocates 100 MW of wind generation exclusively to that
            customer. The customer, in turn, can legitimately claim that 100
            percent of their energy needs are met with carbon-free renewable
            energy.
          </p>
          <p>
            Green tariffs are a subset of what is sometimes called the voluntary
            market for renewable energy, so named to distinguish it from the
            compliance market which is driven by procurement obligations set
            under renewable portfolio standard (RPS) programs.
          </p>
          <p>
            Growth in the C&I voluntary market has been strong—the Renewable
            Energy Buyers Alliance (REBA) tracked 79 large-scale renewable
            energy deals totaling 9.33 gigawatts (GW) of power in the U.S. last
            year. Bloomberg NEF puts the figure at 13.6 GW, more than the global
            total in 2018. BNEF estimates that 80% of these contracts (11.2 GW)
            were virtual power purchase agreements (VPPAs), and that the
            remaining 20% (2.4 GW) were purchased under green tariffs.
          </p>
          <p>
            This 2.4 GW of green tariff purchases represents a tiny fraction of
            what has the potential to be a huge market. The
            alternative—conventional or virtual PPAs—are a great option for
            large, sophisticated buyers with significant annual load, appetite
            for negotiating complex contracts, and the ability to properly
            evaluate and manage the associated risk. For most small to mid-size
            (and even some large) C&I customers however, the simplicity of
            purchasing renewable energy through a green tariff is much more
            appealing.
          </p>
          <p>
            Savvy utilities understand the growth potential of the C&I market
            and have shaped innovative programs to meet their customers’ needs.
            Examples include the green tariffs offered by Xcel Energy, Georgia
            Power, DTE, and Evergy. Key features that have contributed to the
            success of these programs include competitive pricing, simplicity,
            and the sustainability characteristics of the renewable energy
            sources.
          </p>
          <p>
            With a 16 GW portfolio of clean energy projects developed across
            North America, EDF Renewables serves the needs of both voluntary and
            compliance buyers in over 35 states. In addition to PPAs with
            individual clients like Google, San Diego Zoo, BASF, Salesforce and
            Kimberly-Clark, we also supply renewable power to green tariff
            programs run by the investor-owned utilities, cooperatives,
            municipals and power agencies. My role involves identifying and
            structuring renewable energy transactions for both voluntary and
            compliance buyers. C&I buyers of all sizes are hungry for more and
            effective green tariff programs, and I encourage energy providers to
            follow the leadership of their peers and explore the potential to
            expand their customer offerings in this area. It is clear that this
            is where the market is headed, and forward-thinking utilities will
            be rewarded for committing to this new future.
          </p>

          <div className="back-to-top">
            <a href="#">Back to top</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
