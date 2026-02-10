'use client'

import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          // Don't unobserve so animation happens every time
        }
      })
    }, observerOptions)

    // Observe all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    // Parallax effect for hero and sections
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5
        el.style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    // Fade in on scroll for cards
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-in-active')
          }, index * 100) // Stagger effect
        }
      })
    }, { threshold: 0.1 })

    const fadeElements = document.querySelectorAll('.fade-on-scroll')
    fadeElements.forEach((el) => fadeObserver.observe(el))

    // Slide in from sides
    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-active')
        }
      })
    }, { threshold: 0.1 })

    const slideLeftElements = document.querySelectorAll('.slide-left')
    const slideRightElements = document.querySelectorAll('.slide-right')
    slideLeftElements.forEach((el) => slideObserver.observe(el))
    slideRightElements.forEach((el) => slideObserver.observe(el))

    // Scale animation
    const scaleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scale-in-active')
        }
      })
    }, { threshold: 0.1 })

    const scaleElements = document.querySelectorAll('.scale-on-scroll')
    scaleElements.forEach((el) => scaleObserver.observe(el))

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealElements.forEach((el) => observer.unobserve(el))
      fadeElements.forEach((el) => fadeObserver.unobserve(el))
      slideLeftElements.forEach((el) => slideObserver.unobserve(el))
      slideRightElements.forEach((el) => slideObserver.unobserve(el))
      scaleElements.forEach((el) => scaleObserver.unobserve(el))
    }
  }, [])

  return null
}
