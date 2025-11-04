














import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Tutorial = ({ steps, isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen && steps[currentStep]) {
      updateTooltipPosition();
      window.addEventListener('resize', updateTooltipPosition);
      return () => window.removeEventListener('resize', updateTooltipPosition);
    }
  }, [isOpen, currentStep, steps, isMobile]);

  const updateTooltipPosition = () => {
    const step = steps[currentStep];
    if (!step?.target) return;

    const targetElement = document.querySelector(step.target);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;


      if (isMobile) {
        const tooltipWidth = Math.min(280, window.innerWidth - 32);
        const tooltipHeight = 200;
        const centerX = window.innerWidth / 2 - tooltipWidth / 2;
        
        
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        
        if (spaceBelow >= tooltipHeight + 40) {
          
          setTooltipPosition({
            top: rect.bottom + scrollTop + 16,
            left: Math.max(16, centerX)
          });
        } else if (spaceAbove >= tooltipHeight + 40) {
        
          setTooltipPosition({
            top: rect.top + scrollTop - tooltipHeight - 16,
            left: Math.max(16, centerX)
          });
        } else {

          setTooltipPosition({
            top: window.innerHeight - tooltipHeight - 80 + scrollTop,
            left: Math.max(16, centerX)
          });
        }
      } else {
       
        let top, left;
        const tooltipWidth = 320;
        const tooltipHeight = 200;

        switch (step.placement || 'bottom') {
          case 'top':
            top = rect.top + scrollTop - tooltipHeight - 20;
            left = rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2);
            break;
          case 'bottom':
            top = rect.bottom + scrollTop + 20;
            left = rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2);
            break;
          case 'left':
            top = rect.top + scrollTop + (rect.height / 2) - (tooltipHeight / 2);
            left = rect.left + scrollLeft - tooltipWidth - 20;
            break;
          case 'right':
            top = rect.top + scrollTop + (rect.height / 2) - (tooltipHeight / 2);
            left = rect.right + scrollLeft + 20;
            break;
          default:
            top = rect.bottom + scrollTop + 20;
            left = rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2);
        }

        
        const padding = 20;
        left = Math.max(padding, Math.min(window.innerWidth - tooltipWidth - padding, left));
        top = Math.max(padding, top);

        setTooltipPosition({ top, left });
      }

      
      targetElement.style.position = 'relative';
      targetElement.style.zIndex = '1001';
      targetElement.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.5), 0 0 0 2px white';
      targetElement.style.borderRadius = '8px';
    }
  };

  const clearHighlight = () => {
    const step = steps[currentStep];
    if (step?.target) {
      const targetElement = document.querySelector(step.target);
      if (targetElement) {
        targetElement.style.position = '';
        targetElement.style.zIndex = '';
        targetElement.style.boxShadow = '';
        targetElement.style.borderRadius = '';
      }
    }
  };

  const handleNext = () => {
    clearHighlight();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    clearHighlight();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    clearHighlight();
    setCurrentStep(0);
    onComplete();
  };

  const handleClose = () => {
    clearHighlight();
    setCurrentStep(0);
    onClose();
  };

  if (!isOpen || !steps[currentStep]) return null;

  const step = steps[currentStep];

  return (
    <>

      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
        style={{ pointerEvents: 'none' }}
      />
      
     
      <div
        className={`fixed z-[1002] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 ${
          isMobile ? 'p-4 mx-4' : 'p-6'
        } ${isMobile ? 'max-w-none' : 'max-w-sm'}`}
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          width: isMobile ? `${Math.min(280, window.innerWidth - 32)}px` : '320px'
        }}
      >
        
        <div className={`flex items-center justify-between ${isMobile ? 'mb-3' : 'mb-4'}`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className={`font-medium text-gray-600 dark:text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
          >
            <X className={isMobile ? 'w-5 h-5' : 'w-4 h-4'} />
          </button>
        </div>

  
        <div className={isMobile ? 'mb-4' : 'mb-6'}>
          <h3 className={`font-semibold text-gray-900 dark:text-white mb-2 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            {step.title}
          </h3>
          <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
            isMobile ? 'text-xs' : 'text-sm'
          }`}>
            {step.content}
          </p>
        </div>

        
        <div className={isMobile ? 'mb-3' : 'mb-4'}>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div 
              className="bg-blue-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className={`flex items-center justify-between ${isMobile ? 'gap-2' : ''}`}>
          <Button
            variant="ghost"
            size={isMobile ? 'sm' : 'sm'}
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`gap-1 ${isMobile ? 'px-2 text-xs' : ''}`}
          >
            <ChevronLeft className={isMobile ? 'w-3 h-3' : 'w-4 h-4'} />
            {isMobile ? 'Prev' : 'Previous'}
          </Button>
          
          <div className={`flex ${isMobile ? 'gap-1' : 'gap-2'}`}>
            <Button
              variant="ghost"
              size={isMobile ? 'sm' : 'sm'}
              onClick={handleClose}
              className={`text-gray-600 dark:text-gray-300 ${isMobile ? 'px-2 text-xs' : ''}`}
            >
              Skip{isMobile ? '' : ' Tour'}
            </Button>
            <Button
              size={isMobile ? 'sm' : 'sm'}
              onClick={handleNext}
              className={`gap-1 ${isMobile ? 'px-3 text-xs' : ''}`}
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className={isMobile ? 'w-3 h-3' : 'w-4 h-4'} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


export default Tutorial;
