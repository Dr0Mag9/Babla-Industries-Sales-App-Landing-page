# Deployment Guide for Babla Group Sales App Landing Page

## VPS Details
- **IP Address:** `72.61.243.117`
- **Subdomain:** `appinfo.bablaindustries.com`
- **OS:** Linux (Ubuntu/Debian recommended)

## 1. Prepare Your Assets
Before building the project, ensure you have placed your files in the following directories within the project folder:
- **App Logo:** Place your company logo in `public/assets/images/logo.png`
- **App Screenshots/Mockups:** Place your mockups in `public/assets/images/` and ensure the filenames match what's in `src/App.tsx` (e.g., `app-hero-mockup.png`, `screenshot1.png`, etc.)
- **APK File:** Place your Android APK file at `public/assets/apk/BablaSalesApp.apk`

## 2. Build the Project
Open a terminal in the project folder and run:
```bash
npm install
npm run build
```
This will create a `dist` folder containing the optimized, production-ready files.

## 3. Upload to the Server
Upload the contents of the `dist` folder to your VPS. 
You can use `scp`, `rsync`, or an SFTP client (like FileZilla).

Connect to your VPS:
```bash
ssh root@72.61.243.117
```

Create the directory for the website:
```bash
sudo mkdir -p /var/www/appinfo.bablaindustries.com/dist
```

Upload your local `dist` folder into `/var/www/appinfo.bablaindustries.com/dist`.

## 4. Install & Configure Nginx
If Nginx is not installed, install it:
```bash
sudo apt update
sudo apt install nginx
```

Copy the provided `nginx.conf` file to the Nginx sites-available directory on your server:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/appinfo.bablaindustries.com
```

Enable the site by creating a symbolic link:
```bash
sudo ln -s /etc/nginx/sites-available/appinfo.bablaindustries.com /etc/nginx/sites-enabled/
```

Check Nginx configuration for syntax errors:
```bash
sudo nginx -t
```

If successful, restart Nginx:
```bash
sudo systemctl restart nginx
```

## 5. Set up SSL (HTTPS)
It's highly recommended to secure your site with an SSL certificate. You can do this easily with Certbot:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d appinfo.bablaindustries.com
```

Follow the prompts, and Certbot will automatically configure SSL for your site!
