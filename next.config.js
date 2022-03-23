module.exports = {
    images: {
        domains: ["lifeofbrain.com", "fakestoreapi.com", "firebasestorage.googleapis.com"],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
};