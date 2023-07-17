import Message from "./components/Message.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";

function App() {
    const expenseList = [
        {
            itemName: "Car Insurance",
            itemDate: new Date().toString(),
            itemPrice: 22000
        },
        {
            itemName: "Car Music System",
            itemDate: new Date().toString(),
            itemPrice: 11500
        },
        {
            itemName: "HID Headlights",
            itemDate: new Date().toString(),
            itemPrice: 4200
        },
        {
            itemName: "Horn",
            itemDate: new Date().toString(),
            itemPrice: 3500
        }
    ]
    return <div>
        <Message/>
        <ExpenseItem title={expenseList[0].itemName} amount={expenseList[0].itemPrice} date={expenseList[0].itemDate}/>
        <ExpenseItem title={expenseList[1].itemName} amount={expenseList[1].itemPrice} date={expenseList[1].itemDate}/>
        <ExpenseItem title={expenseList[2].itemName} amount={expenseList[2].itemPrice} date={expenseList[2].itemDate}/>
        <ExpenseItem title={expenseList[3].itemName} amount={expenseList[3].itemPrice} date={expenseList[3].itemDate}/>
    </div>

}

export default App;