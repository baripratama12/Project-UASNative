const { checkSchema } = require('express-validator');

const { dbModel } = require('./Services');
const SchemaValidatorHandler = require('../../../utils/services/SchemaValidatorHandler');
const { ValidateSchemaModel, ValidateSchemaDefault } = require('../../../utils/services/ValidateSchema');

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

    // Nama
    ...ValidateSchemaDefault({
      ...configSchema,
      index: 'namaPelanggan',
    }),

    // Kontak
    ...ValidateSchemaDefault({
      ...configSchema,
      index: 'kontakPelanggan',
    }),
  };
};

function CreateValidator() {
  const { namaPelanggan, kontakPelanggan } = ModelSchema({
    checkIn: ['body'],
    errorIf: 'exist'
  });

  const input = {
    namaPelanggan: { ...namaPelanggan, notEmpty: { errorMessage: 'validations.required' } },
    kontakPelanggan: { ...kontakPelanggan, optional: true },
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
  const { namaPelanggan, kontakPelanggan } = ModelSchema({
    checkIn: ['body'],
    errorIf: 'exist'
  });

  const input = {
    namaPelanggan: { ...namaPelanggan, optional: true },
    kontakPelanggan: { ...kontakPelanggan, optional: true },
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
