import { connectDB } from "@/lib/mongodb";
import { Sheet } from "@/models/Sheet";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await connectDB();
  const { id } = await params;
  const sheet = await Sheet.findById(id);
  return NextResponse.json(sheet);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await connectDB();
  const body = await req.json();
  const { id } = await params;
  const sheet = await Sheet.findByIdAndUpdate(
    id,
    { title: body.title, data: body.data, updatedAt: new Date() },
    { new: true },
  );
  return NextResponse.json(sheet);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await connectDB();
  const { id } = await params;
  const sheet = await Sheet.findByIdAndDelete(id);
  return NextResponse.json(sheet);
}
