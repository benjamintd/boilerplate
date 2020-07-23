module.exports = {
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    fontFamily: {
      title: ["Montserrat", "sans-serif"]
    },
    opacity: {
      "0": "0",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1"
    },
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "32rem"
      }
    },
    variants: {}
  }
};
