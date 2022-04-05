const log = (msg: string, color = "blue") => {
  console.log(`%c${msg}`, `color:${color};font-weight:600;`);
};

export default log;
