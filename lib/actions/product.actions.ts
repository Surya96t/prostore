'use server';

import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";

// Get latest products 
export async function getLatestProducts() {
    // const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt: 'desc'},
    });

    // Data returned is a prisma object
    return convertToPlainObject(data);
}

// Get single product by it's s;ug
export async function getProductBySlug(slug:string) {
    return await prisma.product.findFirst({
        where: {slug: slug}
    })
    
}