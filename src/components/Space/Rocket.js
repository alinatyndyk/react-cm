export default function Rocket({item:{mission_name, launch_year, links:{mission_patch_small}}}){
    return(
        <div>
            <div>mission name - {mission_name}</div>
            <div>launch year - {launch_year}</div>
            <img src={mission_patch_small} alt="{mission_name}"/>
            
        </div>
    )
}