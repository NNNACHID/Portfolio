<template>
    <section id="contact" class="py-16 bg-indigo-700 text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center">Contact</h2>
            <div class="max-w-3xl mx-auto">
                <form class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="name" class="block mb-1">Nom</label>
                            <input type="text" id="name" class="w-full px-4 py-2 rounded-md text-gray-800 bg-white"
                                placeholder="Votre nom" />
                        </div>
                        <div>
                            <label for="email" class="block mb-1">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-2 rounded-md text-gray-800 bg-white"
                                placeholder="Votre email" />
                        </div>
                    </div>
                    <div>
                        <label for="subject" class="block mb-1">Sujet</label>
                        <input type="text" id="subject" class="w-full px-4 py-2 rounded-md text-gray-800 bg-white"
                            placeholder="Sujet de votre message" />
                    </div>
                    <div>
                        <label for="message" class="block mb-1">Message</label>
                        <textarea id="message" rows="5" class="w-full px-4 py-2 rounded-md text-gray-800 bg-white"
                            placeholder="Votre message"></textarea>
                    </div>
                    <button type="submit"
                        class="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-100 transition-colors">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
