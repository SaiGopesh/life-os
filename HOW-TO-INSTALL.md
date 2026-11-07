# Life OS — install it as an app

This folder is the complete app. Once it's online (free) you can install it on your phone:
it gets its own icon, opens full-screen without the browser bar, and works with no internet.
Your data (jobs, workouts, meals, weights) stays on your phone — nothing is uploaded anywhere.

## 1. Put it online for free (one time, about 10 minutes)

Phones only allow installing apps from an **https** web address, so the files need free hosting.

**GitHub Pages (recommended, free):**
1. Create a free account at github.com.
2. Click **New repository**, name it `life-os`, choose **Public**, tick **Add a README**, click **Create**.
3. Click **Add file → Upload files**, then drag in **everything inside this folder**
   (`index.html`, `manifest.webmanifest`, `sw.js` and the `icons` folder). Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch" choose **main** and **/(root)**, then **Save**.
5. After 1–2 minutes your app is at `https://YOUR-USERNAME.github.io/life-os/`.

(Any other static host works too — for example Netlify or Cloudflare Pages: upload this folder.)

## 2. Install it on your phone

- **Android (Chrome):** open your app's address. Tap **Install** when it's offered, or the **⋮** menu → **Install app** / **Add to Home screen**.
  You can also tap **Settings → Life OS as an app → Install app** inside Life OS.
- **iPhone (Safari):** open the address in **Safari**, tap **Share** → **Add to Home Screen** → **Add**.
- **Laptop (Chrome / Edge):** click the install icon at the right of the address bar.

Open Life OS once while online; after that it works offline.

## 3. Bring your existing data across

The installed app starts empty, because each copy of Life OS keeps its own data.
1. In the copy you've been using (claude.ai or the offline file): **Settings → Export full backup (JSON)**.
2. Send that file to your phone (email it to yourself, or save it to Google Drive / Files).
3. In the installed app: **Settings → Restore from a backup** → choose the file → **Check backup** → **Replace everything** (or **Merge**).

Keep exporting a backup weekly — it's your safety net if the phone is lost or the app's data is cleared.

## 4. Updating the app later

Upload the new `index.html` and `sw.js` to the same place (GitHub: **Add file → Upload files**, replace).
Next time you open Life OS it shows **"A new version is ready" → Update now**. Your data is kept.

## Good to know

- **Privacy:** with a public GitHub repository, anyone with the address can open the app's code
  (it contains your default profile name and qualifications), but they only ever see their own empty copy —
  your data never leaves your phone.
- **Exercise demos:** 33 exercises show an animated demonstration right in the app (from StrengthLog, credited on each — their free resources may be used in non-commercial projects with a link back). After you've seen a demo once, the installed app keeps it, so it also works offline. You can still save a YouTube video for any exercise or recipe; it plays inside the app (internet needed for YouTube).
- **Notifications:** web apps can't remind you while closed; open Life OS each morning.
- **Want a Play-Store-style Android app (APK/AAB)?** Once the app is online, free tools such as PWABuilder (pwabuilder.com)
  can wrap your address into an Android package. This is optional — the installed web app already works like an app.
- **Try it on a computer first:** in this folder run `python -m http.server 8000`, then open http://localhost:8000
