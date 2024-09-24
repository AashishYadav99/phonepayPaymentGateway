import './App.css'
import axios from 'axios';
function App() {
  const data = {
    name: 'Vikas',
    amount: 1,
    number: '9999999999',
    MUID: "MUID" + Date.now(),
    transactionId: 'T' + Date.now(),
}

  const HandleClick=async()=>{ 

    await axios.post('http://localhost:8000/order', { ...data }).then(res => {

        console.log(res.data)
        if (res.data.success===true) {
            window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
        }
    })
        .catch(error => {
            console.error(error);
        });


  }

  return (
    <>
      <button onClick={HandleClick}>Pay now</button>
    </>
  )
}

export default App
