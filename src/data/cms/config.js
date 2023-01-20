const collections = import.meta.glob('./collections/*', {eager:true, import: 'default'})
const config =
{
    backend: {
        name: "gitlab",
        repo: "Kodvet/sektionshemsidan",
        auth_type: "pkce",
        app_id: "1fd03c5ff044c3a3abff03589e28d67bce9b3ccb0ff2ad39764fd46e4dbf0c38",
        api_root: "https://gitlab.liu.se/api/v4",
        base_url: "https://gitlab.liu.se/",
        auth_endpoint: "oauth/authorize",
        branch: "main"
    },
    local_backend: true,
    logo_url: "https://sektionshemsidan.netlify.app/images/Sektionslogga 1.png",
    display_url: "http://localhost:3000",
    media_folder: "/static",
    public_folder: "/",
    locale: "sv",
    slug: {
        encoding: "ascii",
        clean_accents: true
    },

    collections: Object.values(collections)
}
export default config