exports.default = (api, mongoose) => {
  // get Mongoose Schema type
  const Schema = mongoose.Schema

  // create a new Schema
  const newSchema = new Schema({
    name: String,
    slug: String,
    permissions: { type: Schema.Types.Mixed, default: [] }
  }, { timestamps: true })

  // return the created schema
  return newSchema
}
