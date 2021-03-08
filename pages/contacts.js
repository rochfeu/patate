import { useState } from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'

export default function Contact() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Head>
        <title>Patate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>This is the count: {count}</div>
        <button onClick={() => setCount(count => count+1)}> 
          Add
        </button>
        <button onClick={() => setCount(count => count-1)}> 
          Sub
        </button>

        <form name="contact" action="/success" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="yourname">Your Name:</label>
            <input type="text" name="name" id="yourname" />
          </p>
          <p>
            <label htmlFor="youremail">Your Email: </label>{' '}
            <input type="email" name="email" id="youremail" />
          </p>
          <p>
            <label htmlFor="yourmessage">Message: </label>
            <textarea name="message" id="yourmessage"></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

      </main>

      <Footer />
    </div>
  )
}
