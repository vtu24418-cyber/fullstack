CREATE DATABASE inventory_db;
USE inventory_db;

CREATE TABLE suppliers (
    supplier_id VARCHAR(10) PRIMARY KEY,
    supplier_name VARCHAR(100)
);

CREATE TABLE items (
    item_id VARCHAR(10) PRIMARY KEY,
    item_name VARCHAR(100),
    category VARCHAR(50),
    supplier_id VARCHAR(10),
    stock INT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

INSERT INTO suppliers VALUES
('S101','Tech Supplier'),
('S102','Fruit Supplier'),
('S201','Packaging Co'),
('S203','Logistics Co');

INSERT INTO items VALUES
('E002','Microchips','Electronics','S101',5),
('F001','Whole Bananas','Perishables','S102',5),
('F005','Small Bananas','Perishables','S102',22),
('P102','Boxes','Packaging','S201',45),
('P105','Crate Liners','Packaging','S203',120);