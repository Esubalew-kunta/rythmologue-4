import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import StickyBookingBar from './components/layout/StickyBookingBar'
import FloatingCall from './components/layout/FloatingCall'
import { ScrollProgress } from './components/fx/motion'
import { useI18n } from './i18n/i18n'
import Home from './pages/Home'
import Stub from './pages/Stub'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const { t } = useI18n()
  return (
    <div className="flex min-h-screen flex-col bg-obsidian">
      <a href="#main" className="skip-link">{t('Aller au contenu', 'Skip to content')}</a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arythmie" element={<Stub titleFr="Arythmie" titleEn="Arrhythmia" />} />
          <Route path="/arythmie/generalites" element={<Stub titleFr="Généralités" titleEn="Overview" />} />
          <Route path="/arythmie/types" element={<Stub titleFr="Types d’arythmie" titleEn="Types of arrhythmia" />} />
          <Route path="/arythmie/fibrillation-atriale" element={<Stub titleFr="Fibrillation atriale" titleEn="Atrial fibrillation" />} />
          <Route path="/arythmie/holter-implantable" element={<Stub titleFr="Holter implantable" titleEn="Implantable Holter" />} />
          <Route path="/traitements" element={<Stub titleFr="Traitements" titleEn="Treatments" />} />
          <Route path="/traitements/ablation-catheter" element={<Stub titleFr="Ablation par cathéter" titleEn="Catheter ablation" />} />
          <Route path="/traitements/pacemaker" element={<Stub titleFr="Pacemaker" titleEn="Pacemaker" />} />
          <Route path="/traitements/defibrillateur" element={<Stub titleFr="Défibrillateur automatique" titleEn="Defibrillator" />} />
          <Route path="/montres-connectees" element={<Stub titleFr="Montres connectées" titleEn="Smartwatches" />} />
          <Route path="/apnee-du-sommeil" element={<Stub titleFr="Apnée du Sommeil" titleEn="Sleep Apnea" />} />
          <Route path="/cardio-check-up" element={<Stub titleFr="Cardio Check-Up" titleEn="Cardio Check-Up" />} />
          <Route path="/dr-sana-amraoui" element={<Stub titleFr="À propos" titleEn="About" />} />
          <Route path="/blog" element={<Stub titleFr="Blog" titleEn="Blog" />} />
          <Route path="/blog/:slug" element={<Stub titleFr="Article" titleEn="Article" />} />
          <Route path="/faq" element={<Stub titleFr="FAQ" titleEn="FAQ" />} />
          <Route path="/contact" element={<Stub titleFr="Contacts" titleEn="Contact" />} />
          <Route path="/mentions-legales" element={<Stub titleFr="Mentions légales" titleEn="Legal notice" />} />
          <Route path="/confidentialite" element={<Stub titleFr="Confidentialité" titleEn="Privacy" />} />
          <Route path="*" element={<Stub titleFr="Page introuvable" titleEn="Page not found" />} />
        </Routes>
      </main>
      <Footer />
      <StickyBookingBar />
      <FloatingCall />
    </div>
  )
}
