import { styled } from "uebersicht";

import config from "./lib/timer.config.js";

const Table = styled("table")`
  border-spacing: 2rem 0em;
`;

const Name = styled("td")`
  font-weight: 600;
`;

const Countdown = styled("td")`
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
`;

const Row = styled("tr")((props) => ({
  color: props.outdated ? "gray" : "white",
  opacity: props.outdated ? 0.6 : 1,
}));

export const className = `
    left: 0;    
    top: 1rem;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  `;

export const refreshFrequency = 60e3 * 60; // ms

export const initialState = config;

function getCountdown(date) {
  const now = new Date();
  return Math.floor((date - now) / (1000 * 60 * 60 * 24)) + 1; // get days
}

export const render = ({ dates }) => {
  const countdown = dates
    .map(({ name, date }) => ({
      name,
      countdown: getCountdown(date),
    }))
    .sort(({ countdown: a }, { countdown: b }) => a - b);
  return (
    <Table>
      <tbody>
        {countdown.map(({ name, countdown }, idx) => (
          <Row key={idx} outdated={Math.sign(countdown) < 0}>
            <Name>{name}</Name>
            <Countdown>{countdown} days</Countdown>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};
