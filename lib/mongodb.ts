import mongoose from "mongoose";

declare global {
  var mongooseConn: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

const cached = global.mongooseConn ?? { conn: null, promise: null };
global.mongooseConn = cached;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI ?? "";
  if (!uri) {
    throw new Error("Please set the MONGODB_URI environment variable.");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
