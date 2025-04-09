import React, { useState } from 'react'

import QRcode from 'react-qr-code'

function QrcodeGenerator() {

  const [input, setInput] = useState('')
  const [qrcode, setQrcode] = useState('')

  function qrCodeGenerator(){
setQrcode(input)
  }

  return (
    <div className='w-[700px] h-[500px] flex flex-col justify-center items-center gap-10'>
        <h1 className='text-2xl bg-amber-100'>Qr code generator</h1>
        <div >
            <input className='py-1 px-1 border-0 mr-1' type="text" name="qrcode" id=""  placeholder='Enter you value here' onChange={(e)=>setInput(e.target.value)}/> 
            <button disabled={input && input.trim() !== "" ? false : true} onClick={qrCodeGenerator} className='border-0 ml-1 bg-amber-100 cursor-pointer'>Generate QR Code</button>
        </div>
        <div>
            <QRcode value={qrcode} size={300}   /> 
        </div>
    </div>
  )
}

export default QrcodeGenerator