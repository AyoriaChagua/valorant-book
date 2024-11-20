import { httpAgents } from "@/lib/endpoints"
import { Agent } from "@/lib/types"
import axios from "axios"

export const getAgents = {
    all: async () => {
        try {
            const response = await axios.get(httpAgents);
            const agents: Agent[] = response.data.data;
            return agents;
        } catch (error) {
            return { error }
        }
    },
    byId: async (id: string) => {
        try {
            const response = await axios.get(`${httpAgents}/${id}`);
            const agents: Agent = response.data.data;
            return agents;
        } catch (error) {
            return { error }
        }
    }
}

export const getMaps = {
    all: async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/maps');
            const maps = response.data.data;
            return maps;
        } catch (error) {
            return { error }
        }
    },
    byId: async (id: string) => {
        try {
            const response = await axios.get(`https://valorant-api.com/v1/maps/${id}`);
            const map = response.data.data;
            return map;
        } catch (error) {
            return { error }
        }
    }
}