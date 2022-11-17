import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import {Container, Title} from './styles'

const Faq = () => {
  const [open, setOpen] = useState<string>('1')

  const handleToggle = (id:string) => {
    if (open === id) {
      setOpen('')
    } else {
      setOpen(id)
    }
  };

  return (
    <Container id='faq'>
      <Title className='attention-strong'>Perguntas Frequentes</Title>
      { //@ts-ignore
        <Accordion open={open} toggle={handleToggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      }
    </Container>
  );
}

export default Faq