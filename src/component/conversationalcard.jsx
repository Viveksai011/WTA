'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cardData } from '@/lib/carddata';
import { ChevronRight, CircleCheckBig } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Conversationalcard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardContainerRef = useRef(null);

  const handleCardClick = index => {
    setSelectedCard(index);
  };

  const handleLeftArrowClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 180;
    }
  };

  const handleRightArrowClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 180;
    }
  };

  const isLeftArrowVisible = cardContainerRef.current && cardContainerRef.current.scrollLeft > 0;

  return (
    <div className="relative flex items-center mb-8">
      {isLeftArrowVisible && (
        <Button
          onClick={handleLeftArrowClick}
          className="absolute left-0 z-10 h-10 w-10 bg-transparent hover:bg-gray-100 rounded-full"
          aria-label="Scroll left"
        >
          <ChevronRight className="h-4 w-4 rotate-180 text-black" />
        </Button>
      )}

      <div
        ref={cardContainerRef}
        className="flex gap-3 overflow-auto lg:overflow-hidden w-full max-w-[1080px] lg:ml-6 max-md:p-3 justify-between"
        role="list"
        aria-label="Performance metrics cards"
      >
        {cardData.map((card, index) => (
          <div key={index} role="listitem" className="relative">
            <Card
              className={`relative cursor-pointer rounded-2xl whitespace-nowrap min-w-[180px] py-6 px-4 ${
                selectedCard === index ? 'border-2 border-black' : ''
              }`}
              onClick={() => handleCardClick(index)}
              aria-label={`${card.title}: ${card.value}${card.unit || ''}`}
              data-selected={selectedCard === index ? 'true' : 'false'}
              tabIndex={0}
            >
              {selectedCard === index && (
                <div className="absolute top-0 right-0 m-2" aria-hidden="true">
                  <CircleCheckBig className="h-5 w-5 text-black" />
                </div>
              )}
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-2xl font-bold">
                {card.value}
                {card.unit && <span className="text-sm text-semibold">{card.unit}</span>}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Button
        onClick={handleRightArrowClick}
        className="absolute right-0 z-10 bg-transparent h-10 w-10 shadow-md hover:bg-gray-100 rounded-full"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4 text-black" />
      </Button>
    </div>
  );
};

export default Conversationalcard;
