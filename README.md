# 🥠 Fortune Cookie App

This is a React app where the user can click a “fortune cookie” and receive a random fortune message via the OpenAI API.

I used the fortune-cookie project from Technigo to get going fast and try out how to add AI APIs. I tried both gemini and openai to get to know multiple ways of adding ai to the app.

---

## 🚀 Features

- Clickable button that generates a fortune cookie message
- Loading state while waiting for the API response
- Displays random or AI-generated messages
- Simple and responsive design
- Built with React + Vite

---

## 🧠 Tech Stack

- React (Vite)
- useState (state management)
- OpenAI API (GPT-4o-mini)
- .env for API key management
- CSS for styling

---

If I had more time i would make a mock-api to be able to run the page even when I don't want OpenAI-credits to be used. 
I would make the css more interesting.
I would put the API-key in atlas db for more security - why I did'nt add my credit card-info to OpenAI for now - i want to try it when Im more sure what I'm doing security-wise.

I have deployed it at Netlify instead of CloudFlare because I did'nt add the db and just wanted to show the design in an easy way.


See it deployed at:
https://cookiesurprise.netlify.app/



## 📦 Installation

1. Clone the repository:

```bash
git clone <https://github.com/HejHTML/ai-fortune-cookie.git>
