import React from 'react'

function Pay({fname,lname,email,amount ,tx_ref, publickey}) {
  return (
    <div className='flex justify-center mt-6  '>
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value="CHAPUBK_TEST-pq7xpwyUzlAzob7nwfab9JYvtehAUde6" />
    <input type="hidden" name="tx_ref" value={tx_ref} />
    <input type="hidden" name="amount" value={amount} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value={email} />
    <input type="hidden" name="first_name" value={fname} />
    <input type="hidden" name="last_name" value={lname} />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="https://example.com/returnurl" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit" className='bg-purple-400 w-40 h-15 rounded-md text-slate-950 font-semibold p-3 hover:bg-purple-950 hover:text-white '> Donate </button>
</form>
    {
      console.log({tx_ref})
    }
    </div>
  )
}

export default Pay
