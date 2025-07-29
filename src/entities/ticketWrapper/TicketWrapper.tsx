import Ticket from '../ticket/Ticket';
import TicketCard from '../ticketCard/TicketCard';
import type { ExtendedTicketData } from '../ticketCard/TicketCardType';
import React, { useState } from 'react';

interface Props {
  data: ExtendedTicketData;
}

const TicketWrapper: React.FC<Props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded((prev) => !prev);

  return isExpanded ? (
    <TicketCard data={data} onToggle={toggle} />
  ) : (
    <Ticket data={data} onToggle={toggle} />
  );
};

export default TicketWrapper;
