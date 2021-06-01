const path = require("path");

const getPluginItem = ({ inputStr }) => {
  // Return plugin's result in the form of 'items'
  let items = [];
  try {
    const result = eval(inputStr);
    if (!isNaN(result)) {
      items.push({
        title: result,
        subtitle: inputStr != result ? `${inputStr} = ${result}` : inputStr,
        icon: {
          path: `${__dirname}${path.sep}icon.svg`,
        },
      });
    }
  } catch (err) {
    // If inputStr is not proper numerical expression, catchs err.
    // Return an empty array to 'items' if you do not need to include this plugin's items.
  }

  return {
    items,
  };
};

// Export a function that has inputStr as a argument.
module.exports = getPluginItem;
