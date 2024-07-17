-- CreateTable
CREATE TABLE `Pelanggan` (
    `id` VARCHAR(191) NOT NULL,
    `namaPelanggan` VARCHAR(191) NOT NULL,
    `kontakPelanggan` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pelanggan_namaPelanggan_key`(`namaPelanggan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Barang` (
    `id` VARCHAR(191) NOT NULL,
    `namaBarang` VARCHAR(191) NOT NULL,
    `merek` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,

    UNIQUE INDEX `Barang_namaBarang_key`(`namaBarang`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gudang` (
    `id` VARCHAR(191) NOT NULL,
    `stok` INTEGER NOT NULL,
    `barangId` VARCHAR(191) NULL,
    `pemasokId` VARCHAR(191) NULL,
    `karyawanId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pemasok` (
    `id` VARCHAR(191) NOT NULL,
    `namaPemasok` VARCHAR(191) NOT NULL,
    `kontakPemasok` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pemasok_namaPemasok_key`(`namaPemasok`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaksi` (
    `id` VARCHAR(191) NOT NULL,
    `pelangganId` VARCHAR(191) NULL,
    `gudangId` VARCHAR(191) NULL,
    `tanggal` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Karyawan` (
    `id` VARCHAR(191) NOT NULL,
    `namaKaryawan` VARCHAR(191) NOT NULL,
    `durasi` INTEGER NOT NULL,

    UNIQUE INDEX `Karyawan_namaKaryawan_key`(`namaKaryawan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gudang` ADD CONSTRAINT `Gudang_barangId_fkey` FOREIGN KEY (`barangId`) REFERENCES `Barang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gudang` ADD CONSTRAINT `Gudang_pemasokId_fkey` FOREIGN KEY (`pemasokId`) REFERENCES `Pemasok`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gudang` ADD CONSTRAINT `Gudang_karyawanId_fkey` FOREIGN KEY (`karyawanId`) REFERENCES `Karyawan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaksi` ADD CONSTRAINT `Transaksi_gudangId_fkey` FOREIGN KEY (`gudangId`) REFERENCES `Gudang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaksi` ADD CONSTRAINT `Transaksi_pelangganId_fkey` FOREIGN KEY (`pelangganId`) REFERENCES `Pelanggan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
