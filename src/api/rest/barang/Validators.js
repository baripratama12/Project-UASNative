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
    ...ValidateSchemaModel({
      ...configSchema,
      index: 'namaBarang',
    }),

    // Merek
    ...ValidateSchemaDefault({
      ...configSchema,
      index: 'merek',
    }),

    // Harga
    ...ValidateSchemaDefault({
      ...configSchema,
      changeValue: (x) => parseInt(x, 10),
      index: 'harga',
    }),
  };
};

function CreateValidator() {
  const { namaBarang, merek, harga } = ModelSchema({
    checkIn: ['body'],
    errorIf: 'exist'
  });

  const input = {
    namaBarang: { ...namaBarang, notEmpty: { errorMessage: 'validations.required' } },
    merek: { ...merek, optional: true },
    harga: { ...harga, optional: true },
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
  const { namaBarang, merek, harga } = ModelSchema({
    checkIn: ['body'],
    errorIf: 'exist'
  });

  const input = {
    namaBarang: { ...namaBarang, optional: true },
    merek: { ...merek, optional: true },
    harga: { ...harga, optional: true },
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
