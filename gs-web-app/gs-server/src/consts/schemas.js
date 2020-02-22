const mongooseService = require('../services/mongooseService');

const {Schema} = mongooseService;

const unique = true;

const builtinOptions = {
    required: true,
    trim: true
};

const USER_SCHEMA = new Schema({
    name: {
        type: String,
        ...builtinOptions,
    },
    surname: {
        type: String,
        ...builtinOptions,
    },
    patronymic: {
        type: String,
        ...builtinOptions,
    },
    birth_date: {
        type: String,
        ...builtinOptions,
    },
    email: {
        type: String,
        unique,
        ...builtinOptions,
    },
    password: {
        type: String,
        minlength: 6,
        ...builtinOptions
    },
    contact_phone: {
        type: String,
        ...builtinOptions,
    },
    sex: {
        type: String,
        ...builtinOptions,
    },
    faculty: {
        type: String,
        ...builtinOptions,
    },
    department: {
        type: String,
        ...builtinOptions,
    },
    specialty: {
        type: String,
        ...builtinOptions,
    },
    study_form: {
        type: String,
        ...builtinOptions,
    },
    pay_form: {
        type: String,
        ...builtinOptions,
    },
    foreign_language: {
        type: String,
        ...builtinOptions,
    },
    graduation_university: {
        type: String,
        ...builtinOptions,
    },
    graduation_year: {
        type: String,
        ...builtinOptions,
    },
    degree_type: {
        type: String,
        ...builtinOptions,
    },
    isHonorsDegree: {
        type: Boolean,
        default: false
    },
    isHostelNeeded: {
        type: Boolean,
        default: false
    },
    gpa: {
        type: Number,
        ...builtinOptions
    },
    publications_count: {
        type: Number,
        default: 0,
        ...builtinOptions
    },
    prospective_supervisor: {
        type: String,
        ...builtinOptions
    },
    distinctive_awards: {
        type: String,
        ...builtinOptions
    },
    additional_info: {
        type: String,
        ...builtinOptions
    },
    create_date: {
        type: String,
        ...builtinOptions
    },
    role: {
        type: Number,
        ...builtinOptions
    },
    lessons: [
        {
            isAbsent: Boolean,
            lesson_date: String,
            lesson_mark: Number
        }
    ],
    exams: [
        {
            exam_date: String,
            exam_mark: Number,
            isPassed: Boolean
        }
    ],
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
        required: false
    },
    resetPasswordExpires: {
        type: Date,
        required: false
    }
}, {timestamps: true});

const TOKEN_SCHEMA = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    token: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200
    }
}, {timestamps: true});

module.exports = {
    USER_SCHEMA,
    TOKEN_SCHEMA
};
