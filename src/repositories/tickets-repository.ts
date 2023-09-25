import { TicketType } from '@prisma/client';
import { prisma } from '@/config';


async function findMany(): Promise<TicketType[]> {
    return prisma.ticketType.findMany() 
}

export const ticketsRepository = {
findMany
};