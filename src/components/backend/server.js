import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ======================
// FILE PATHS
// ======================
const dbPath = path.join(__dirname, "db.json");

const cmsRoutesPath = path.join(
  __dirname,
  "cmsRoutes.json"
);

// ======================
// MIDDLEWARES
// ======================
app.use(cors());
app.use(express.json());

// ======================
// READ DB
// ======================
const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("DB READ ERROR:", error);
    return {};
  }
};

// ======================
// WRITE DB
// ======================
const writeDB = (data) => {
  fs.writeFileSync(
    dbPath,
    JSON.stringify(data, null, 2)
  );
};

// ======================
// READ CMS ROUTES
// ======================
const readCmsRoutes = () => {
  try {
    const data = fs.readFileSync(
      cmsRoutesPath,
      "utf-8"
    );

    return JSON.parse(data);
  } catch (error) {
    console.error("CMS ROUTES ERROR:", error);
    return {};
  }
};

// ======================
// ROOT ROUTE
// ======================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "Eco Ecom API Running Successfully 🚀",
  });
});

// ======================
// CMS ROUTES API
// ======================
app.get("/api/cms-routes", (req, res) => {
  const routes = readCmsRoutes();

  res.status(200).json(routes);
});

// ======================
// GET ALL DATA
// ======================
app.get("/api/:resource", (req, res) => {
  try {
    const db = readDB();

    const { resource } = req.params;

    if (!db[resource]) {
      return res.status(404).json({
        success: false,
        message: `${resource} not found`,
      });
    }

    res.status(200).json(db[resource]);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ======================
// GET SINGLE ITEM
// ======================
app.get("/api/:resource/:id", (req, res) => {
  try {
    const db = readDB();

    const { resource, id } = req.params;

    if (!db[resource]) {
      return res.status(404).json({
        success: false,
        message: `${resource} not found`,
      });
    }

    const item = db[resource].find(
      (item) => item.id === Number(id)
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ======================
// CREATE ITEM
// ======================
app.post("/api/:resource", (req, res) => {
  try {
    const db = readDB();

    const { resource } = req.params;

    if (!db[resource]) {
      db[resource] = [];
    }

    const newItem = {
      id: Date.now(),
      ...req.body,
    };

    db[resource].push(newItem);

    writeDB(db);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ======================
// UPDATE ITEM
// ======================
app.put("/api/:resource/:id", (req, res) => {
  try {
    const db = readDB();

    const { resource, id } = req.params;

    if (!db[resource]) {
      return res.status(404).json({
        success: false,
        message: `${resource} not found`,
      });
    }

    const itemIndex = db[resource].findIndex(
      (item) => item.id === Number(id)
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    db[resource][itemIndex] = {
      ...db[resource][itemIndex],
      ...req.body,
    };

    writeDB(db);

    res.status(200).json(
      db[resource][itemIndex]
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ======================
// DELETE ITEM
// ======================
app.delete("/api/:resource/:id", (req, res) => {
  try {
    const db = readDB();

    const { resource, id } = req.params;

    if (!db[resource]) {
      return res.status(404).json({
        success: false,
        message: `${resource} not found`,
      });
    }

    db[resource] = db[resource].filter(
      (item) => item.id !== Number(id)
    );

    writeDB(db);

    res.status(200).json({
      success: true,
      message:
        "Item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ======================
// SERVER
// ======================
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});