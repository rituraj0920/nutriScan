import { useState } from 'react';

import AppHeader from '../frontpage/header';
import LoginModal from '../components/loginmodal';
import EatHealthyLanding from '../frontpage/front-page';

export default function Home() {
  // State to track if the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-light">
      {/* Pass the function to open the modal to the Header */}
      <AppHeader onOpenLogin={() => setIsModalOpen(true)} />
      
      {/* Main Content for your Landing Page */}
      
      <EatHealthyLanding onOpenLogin={() => setIsModalOpen(true)} />
      {/* The Modal Component - It only shows if isModalOpen is true */}
      <LoginModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      
      
    </div>
  );
}