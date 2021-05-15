const clipboardy = require("clipboardy");

const searchPluginCommand = (inputStr) => {
  let items = [];
  try {
    const result = eval(inputStr);
    if (!isNaN(result)) {
      items.push({
        title: result,
        subtitle: `${inputStr} = ${result}`,
        bundleId: "com.jopemachine.arvis-calculator-plugin",
        actionCallback: () => {
          clipboardy.write(result);
        },
      });
    }
  } catch (err) {
    // If inputStr is not proper numerical expression, catchs err
  }

  return {
    items,
  };
};

module.exports = searchPluginCommand;
