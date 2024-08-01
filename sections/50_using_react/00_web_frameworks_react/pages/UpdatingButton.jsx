import { useState } from "react";

const UpdatingButton = ({ startingValue }) => {
    // useState takes in a default value. We could just put 0 here,
    // but I want to show that these default values can be changed.
    // Keep in mind that because it's a default value, if startingValue's
    // value changes in the future, nothing will happen, because the default
    // is only set on the first time.
    const [counter, setCounter] = useState(startingValue);

    return (
        // We can include JS comments in the "HTML" as well.
        // This creates a button with a value based on our counter.
        // Whenever the button is pressed, it runs setCounter. We can also do setCounter(counter + 1)
        // instead of using the function, but we use it because counter might not be up-to-date.
        // There are situations where this might come up, but for now, just know that it's better practice
        // to use the function to get the current value instead of using the one that we have here.
        //
        // Whenever we run setCounter, it will update the counter, then "re-render" this component. That means
        // that this function will be re-run with the new value for counter. React will see that the value
        // is updated, and will update the actual HTML on the page accordingly.
        <input
            type="button"
            value={counter + " clicks!"}
            onClick={() => setCounter((currentCounter) => currentCounter + 1)}
        />
    );
};

export default UpdatingButton;
