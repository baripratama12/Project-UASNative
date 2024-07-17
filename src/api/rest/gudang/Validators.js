const { checkSchema } = require('express-validator');

const { dbModel } = require('./Services');
const SchemaValidatorHandler = require('../../../utils/services/SchemaValidatorHandler');
const { ValidateSchemaModel, ValidateSchemaDefault, ValidateSchemaCustom } = require('../../../utils/services/ValidateSchema');
const { db } = require('../../../utils/database');

const config = {
  //
};

const FilterSchema = () => ({
  //
});

const ModelSchema = (options) => {
  const { customModel, checkIn, errorIf } = options;
  const configSchema = {
    checkIn,
    errorIf,
    dbModel: customModel || dbModel
  };

  return {
    // Id
    ...ValidateSchemaModel({
      ...configSchema,
      index: 'id',
    }),

    // Stok
    ...ValidateSchemaDefault({
      ...configSchema,
      changeValue: (x) => parseInt(x, 10),
      index: 'stok',
    }),

    // BarangId
    ...ValidateSchemaCustom({
      ...configSchema,
      index: 'barangId',
      custom: {
        options: async (value, { req }) => {
          const user = await db.barang.findUnique({ where: { id: value } });
          if (!user) throw new Error('validations.model.data-not-found');

          req.scarlet.body.barangId = value;
        },
      },
    }),

    // PemasokId
    ...ValidateSchemaCustom({
      ...configSchema,
      index: 'pemasokId',
      custom: {
        options: async (value, { req }) => {
          const user = await db.pemasok.findUnique({ where: { id: value } });
          if (!user) throw new Error('validations.model.data-not-found');

          req.scarlet.body.pemasokId = value;
        },
      },
    }),

     // karyawankId
     ...ValidateSchemaCustom({
      ...configSchema,
      index: 'karyawanId',
      custom: {
        options: async (value, { req }) => {
          const user = await db.karyawan.findUnique({ where: { id: value } });
          if (!user) throw new Error('validations.model.data-not-found');

          req.scarlet.body.karyawanId = value;
        },
      },
    }),
  };
};

function CreateValidator() {
  const { stok, barangId, pemasokId, karyawanId } = ModelSchema({
    checkIn: ['body'],
    errorIf: 'exist'
  });

  const input = {
    stok: { ...stok, optional: true },
    barangId: { ...barangId, notEmpty: { errorMessage: 'validations.required' } },
    pemasokId: { ...pemasokId, notEmpty: { errorMessage: 'validations.required' } },
    karyawanId: { ...karyawanId, notEmpty: { errorMessage: 'validations.required' } },
  };

  return SchemaValidatorHandler([checkSchema(input)]);
}

function ReadValidator() {
  const { id } = ModelSchema({
    checkIn: ['params'],
    errorIf: 'notExist'
  });

  const input = {
    id: { ...id, exists: { errorMessage: 'validations.required', } }
  };

  return SchemaValidatorHandler([checkSchema(input)]);
}

function UpdateValidator() {
  const { stok, barangId, pemasokId, karyawanId } = ModelSchema({
    checkIn: ['body'],
    errorIf: 'exist'
  });

  const input = {
    stok: { ...stok, optional: true },
    barangId: { ...barangId, optional: true },
    pemasokId: { ...pemasokId, optional: true },
    karyawanId: { ...karyawanId, optional: true },
  };

  return SchemaValidatorHandler([checkSchema(input)]);
}

function DeleteValidator() {
  return SchemaValidatorHandler([]);
}

function WheresValidator() {
  const input = FilterSchema();

  return SchemaValidatorHandler([checkSchema(input)]);
}

module.exports = {
  // Config
  config,
  ModelSchema,
  FilterSchema,

  // CRUD
  CreateValidator,
  ReadValidator,
  UpdateValidator,
  DeleteValidator,

  // OTHER
  WheresValidator
};
