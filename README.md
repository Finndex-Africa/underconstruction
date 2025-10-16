# Under Construction Page

A modern, responsive under construction/coming soon page for your web application.

## Features

- **Countdown Timer**: 30-day countdown to launch date
- **Progress Bar**: Animated progress indicator with shimmer effect
- **Email Notification Form**: Collect email addresses for launch notifications
- **Social Media Links**: Quick links to your social media profiles
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Floating icons, background effects, and transitions
- **Easter Egg**: Try the Konami code for a surprise!

## Customization

### Change Launch Date
Edit `script.js` line 2-3:
```javascript
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30); // Change 30 to desired days
```

### Update Social Media Links
Edit the `href` attributes in `index.html` for each social link:
```html
<a href="https://facebook.com/yourpage" class="social-link" aria-label="Facebook">
```

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... other colors */
}
```

### Connect Email Form to Backend
In `script.js`, replace the form submission simulation (around line 55) with your actual API endpoint:
```javascript
// Example with fetch
fetch('https://your-api.com/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
})
.then(response => response.json())
.then(data => {
    showMessage('Thank you! We will notify you when we launch.', 'success');
})
.catch(error => {
    showMessage('Something went wrong. Please try again.', 'error');
});
```

## Deployment

Simply upload all files to your web server or hosting provider. Make sure:
1. `index.html` is in the root or appropriate directory
2. `styles.css` and `script.js` are in the same directory
3. All files are publicly accessible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Free to use for your project.
