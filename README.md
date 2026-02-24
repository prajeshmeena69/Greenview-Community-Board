# 🏘️ Greenview Community Board

A modern, responsive web application for community management that enables residents to stay connected through announcements, events, marketplace listings, and important contacts.

## 🌐 Live Website

👉 **Visit the live site:**  
🔗 https://prajeshmeena69.github.io/Greenview-Community-Board/

## ✨ Features

### 🏠 Home Page
- Latest community announcements with priority levels (Urgent, Important, Normal)
- Quick access links to all major sections
- Clean and intuitive user interface

### 🎉 Events Management
- View upcoming community events and celebrations
- Event calendar with date, time, and location details
- Interest tracking for events
- Admin panel to add new events

### 🛒 Community Marketplace
- Buy, sell, or rent items within the community
- Categories: Furniture, Electronics, Books, Clothing, Sports Equipment, Services
- Filter items by type (For Sale, For Rent, Looking to Buy, Free/Giveaway)
- Post new listings with contact information

### 📞 Important Contacts
- Emergency services (Police, Ambulance, Fire Brigade, Electricity)
- Community management contacts
- Service providers (Utilities, Medical, Delivery)
- Resident committee directory
- Organized with tabs and categories

### 🔐 Admin Panel
- Secure login system (Demo: username: `admin`, password: `1234`)
- Post announcements across different categories
- Add new events
- Manage community contacts
- Add marketplace listings

## 🎯 Demo

The application includes:
- **Login Page**: Admin authentication system
- **Multiple Pages**: Home, Events, Marketplace, Contacts, Admin
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Tabs, filters, modals, and forms

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Responsive Design**: Mobile-first approach

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prajeshmeena69/greenview-community-board.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd greenview-community-board
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. **Access the application**
   - Open `http://localhost:8000` in your browser

## 🚀 Usage

### For Residents:
1. **View Announcements**: Visit the home page to see latest community updates
2. **Check Events**: Navigate to Events page to see upcoming activities
3. **Browse Marketplace**: Visit Marketplace to buy/sell/rent items
4. **Find Contacts**: Access important emergency and service contacts

### For Administrators:
1. **Login**: Click "Admin Login" on the home page
   - Username: `admin`
   - Password: `1234`
2. **Post Content**: Use the admin panel on respective pages to add:
   - Announcements
   - Events
   - Contacts
   - Marketplace items

## 📁 Project Structure

```
greenview-community-board/
│
├── index.html              # Home page with announcements
├── events.html             # Community events page
├── marketplace.html        # Buy/sell/rent marketplace
├── contacts.html           # Important contacts directory
├── admin.html              # Admin panel for posting
├── login.html              # Admin login page
│
├── styles.css              # Main stylesheet
├── login.css               # Login page specific styles
│
├── script.js               # Main JavaScript functionality
├── login.js                # Login authentication logic
│
└── README.md               # Project documentation
```

## 🔐 Admin Access

**Default Credentials** (Demo Mode):
- **Username**: `admin`
- **Password**: `1234`

**Admin Password in script.js**:
```javascript
const ADMIN_PASSWORD = 'greenview2025';
```

> ⚠️ **Security Note**: In a production environment, implement proper backend authentication with encrypted passwords and session management.

## 🔮 Future Enhancements

- [ ] Backend integration with database (MySQL/MongoDB)
- [ ] User registration and authentication system
- [ ] Real-time notifications for new announcements
- [ ] Image upload for marketplace items
- [ ] Event RSVP and attendance tracking
- [ ] Discussion forums and comment sections
- [ ] Mobile application (React Native/Flutter)
- [ ] Email notifications for important updates
- [ ] Payment integration for marketplace
- [ ] Advanced search and filtering options

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Contact

**Prajesh Singh Meena**

- GitHub: https://github.com/prajeshmeena69
- LinkedIn: https://www.linkedin.com/in/prajesh-singh-meena-607437327

---

Made with ❤️ for community living

⭐ Star this repository if you find it helpful!
