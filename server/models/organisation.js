const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CATEGORIES = [ 'startup', 'incubator', 'investmentfund' ];
const STATUSES_ORG = [ 'pending', 'accepted', 'rejected'];
const NEEDS = ['recruitment needs', 'location needs', 'seed funding']

const organizationSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	contacts: {
		email: { type: String, required: true, },
		phone: { type: String, required: true, },
	},
	address: {
		zip: { type: String, required: true, },
		country: { type: String, required: true, },
		city: { type: String, required: true, },
		street: { type: String, required: true, },
	},
	category: {
		type: String,
		enum: CATEGORIES,
		default: 'startup',
    },
    needs: {
		type: String,
		enum: NEEDS,
		default: 'recruitment needs',
	},
	status: {
		type: String,
		enum: STATUSES_ORG,
		default: 'pending',
	},
	ownerId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	location: { type: { type: String }, coordinates: [Number] }
});

organizationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Organisation', organizationSchema);
