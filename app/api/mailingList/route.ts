// Add to Mailing List

import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongo';
import MailingList from '@/models/MailingList';

export async function POST(req: Request) {
    try {
        await connectDB();
        
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Check if email is already in the mailing list
        const existingEmail = await MailingList.findOne({ email });

        if (existingEmail) {
            return NextResponse.json({ error: "Email already in the mailing list" }, { status: 400 });
        }

        // Create new mailing list entry
        const newEntry = await MailingList.create({ email });

        return NextResponse.json({ 
            message: "Successfully added to mailing list",
            data: newEntry 
        }, { status: 201 });

    } catch (error) {
        console.error('Mailing list error:', error);
        return NextResponse.json({ error: "Error processing request" }, { status: 500 });
    }
}
