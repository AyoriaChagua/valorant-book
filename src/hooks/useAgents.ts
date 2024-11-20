import { getAgents } from "@/api/get";
import { useEffect, useState } from "react"
import { useMessages } from "./useMessages";
import { Agent } from "@/lib/types";


type Filters = { [key: string]: string }

export const useAgents = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [agents, setAgents] = useState<Agent[] | null>();
    const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
    const [agent, setAgent] = useState<Agent>();
    const [roles, setRoles] = useState<string[]>([]);
    const [filters, setFilters] = useState<Filters>({});

    const { addErrorMessage } = useMessages();

    const fetchAgents = async () => {
        try {
            setIsLoading(true);
            const response = await getAgents.all();
            if ('error' in response) {
                const errorMessage = typeof response.error === 'string'
                    ? response.error
                    : JSON.stringify(response.error);
                addErrorMessage(errorMessage);
            } else {
                setAgents(response);
                setFilteredAgents(response);
            }
        } catch (error) {
            addErrorMessage('Error fetching agents');
        } finally {
            setIsLoading(false);
        }
    };

    const fetchAgentById = async (id: string) => {
        const response = await getAgents.byId(id);
        if ('error' in response) {
            const errorMessage = typeof response.error === 'string'
                ? response.error
                : JSON.stringify(response.error);
            addErrorMessage(errorMessage);
        } else {
            setAgent(response);
        }
    };

    const handleAgentFilter = (filter: string, value: string) => {
        const _filters = { ...filters, [filter]: value };
        setFilters(_filters);
        applyFilters(_filters);
    };


    const applyFilters = (_filters: Filters) => {
        if (!agents) return;
        let filtered = agents;

        if (_filters.role) {
            filtered = agents.filter(agent => agent.role?.displayName === _filters.role)
        }

        if (_filters.name) {
            filtered = agents.filter(agent => agent?.displayName.toLowerCase().includes(_filters.name.toLowerCase()));
        }

        setFilteredAgents(filtered);
    }

    useEffect(() => {
        (async () => {
            await fetchAgents();
        })();
    }, []);

    useEffect(() => {
        if (agents && agents.length > 0) {
            const roleNames = agents.map(agent => agent.role?.displayName);
            const uniqueRoleName = Array.from(new Set(roleNames));
            setRoles(uniqueRoleName);
        }
    }, [agents])

    return {
        agents,
        agent,
        fetchAgentById,
        handleAgentFilter,
        roles,
        filteredAgents,
        isLoading
    }
}