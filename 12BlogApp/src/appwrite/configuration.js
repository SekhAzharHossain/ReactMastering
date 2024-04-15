import config from '../config/config';
import {Client, ID, Databases, Storage , Query} from "appwrite";

export class Service{
    client =new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,feacturedImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    feacturedImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive::createPost::error",error);
        }
    }

    async updatePost(slug,{title,content,feacturedImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    feacturedImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive::updatePost::error",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive::deletePost::error",error);
            return false;
        }
    }

    async getPost({slug}){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug   
            )
        } catch (error) {
            console.log("Appwrite serive::getPost::error",error)
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive::getPosts::error",error)
            return false;
        }
    }

    // file Upload service
    async uploadFile(file){
        try {
            
        } catch (error) {
            console.log("Appwrite serive::uploadFile::error",error)
            return false;
        }
    }

}

const service= new Service()
export default service