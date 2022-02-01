import sanityClient from '@sanity/client'


export const client =sanityClient(
    {
        projectId:'dfnh2y2a',
        dataset:'production',
        apiVersion: '2021-03-25',
        token:'skm0DyX8KnkszS5tOABhHbNg9hdHr1jO5k7yNXhJrD9reJC0T8pJCko3O4ri0byCnsuj5gUpNiLxtU0dtJOgq8qxIvpoD8oodq1Xz8TT5kYJdLm0sE51TLD7Fyh41yglKhhnIBMRjlqPpXenYLNYgqeplRRqaLF6VIZ6O3ZWyIPmQ7bCD71B',
        useCdn: false,
    }
)