// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const dbConnection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "cyber_db",
    user: "root",
    password: "root",
  });

  try {
    const query = "SELECT * FROM users";
    const [data] = await dbConnection.execute(query);

    dbConnection.end();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: "Something wrong." });
  }
}
