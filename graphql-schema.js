const { query } = require('express')
const bugModel = require('./bugModel')

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = require('graphql')


const bugType = new GraphQLObjectType({
    name: "bug",
    description: "this is a new bug",
    fields: {      
        name: {
            type: GraphQLString,
            description: ""
        },
        details: {
            type: GraphQLString,
            description: ""
        },
        steps: {
            type: GraphQLString,
            description: ""
        },
        version: {
            type: GraphQLString,
            description: ""
        },
        priority : {
            type: GraphQLString ,
            description: ""
        },
        assigned: {
            type: GraphQLString,
            description: ""
        },
        creator: {
            type: GraphQLString,
            description: ""
        },
        status: {
            type: GraphQLString,
            description: ""
        },
        time: {
            type: GraphQLString,
            description: ""
        },
        id: {
            type: GraphQLID,
            description: "this is the bug id"
        },
    }
})

const queryType = new GraphQLObjectType({
    name: "query",
    description: "this is query type",
    fields : {
        bugs : {
            type: new GraphQLList(bugType),
            description: "this is the list of bugs returned",
            args:{
                priority:{
                    type: GraphQLInt,
                    description:""
                },
                status:{type: GraphQLString},
                creator:{type: GraphQLString},
            },
            resolve: (_, args) => { 
                if(args.priority){ return bugModel.getBugsByOption({priority:args.priority})}
                if(args.status){ return bugModel.getBugsByOption({status:args.status})}
                if(args.creator){ return bugModel.getBugsByOption({creator:args.creator})}
                return bugModel.getAllBugs()
            }
        },
        bug : {
            type: bugType,
            description: "this is the single bug returned",
            args:{
                id:{
                    type: GraphQLID,
                    description: "this is the search id"
                },
            },
            resolve: (_, args) => {
                return bugModel.getBugById(args.id)
            }
        },   
    }
})

const schema = new GraphQLSchema({
    query: queryType
})

exports.schema = schema