import React, { useEffect, useState } from 'react';
import BaseModal from '../BaseModal';
// import { Button } from '@edx/paragon';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { thunkActions } from '../../data/redux';
import { FetchErrorAlert } from '../ErrorAlerts/FetchErrorAlert';

export const AiModal = ({
    close,
    imagePrompt,
    isOpen,
}) => {
    // tinymce.activeEditor.selection.getContent();
    const [imageData, setImageData] = useState("");
    const [promptString, setPromptString] = useState("");
    const [generating, setGenerating] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch()
    useEffect(
        () => {
            if (isOpen) {
                setPromptString(imagePrompt);
                setImageData("");
                setIsError(false);
                setErrorMessage("");
                setGenerating(false);
                if (imagePrompt) {
                    submit();
                }
            }
        },
        [isOpen]
    )
    const submit = () => {
        setGenerating(true);
        setImageData("");
        var courseKey = window.location.pathname.split("/")[3];
        dispatch(thunkActions.app.generateImage({
            courseKey: courseKey,
            promptString: promptString,
            onSuccess: (response) => {
                setImageData(response);
                setGenerating(false);
            },
            onFailure: (error) => {
                setGenerating(false);
                setIsError(true);
                setErrorMessage(error.message);
            }
        }));
    }
    const accept = () => {
        const active_node = tinymce.activeEditor.selection.getNode()
        const imageP = document.createElement("p")
        const img = new Image();
        img.src = `data:image/png;base64,${imageData}`;
        imageP.append(img);
        active_node.appendChild(imageP);
        close();
    }
    return (
        <>
            {isOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} onClick={close}></div>
            )}
            <BaseModal
                isOpen={isOpen}
                close={close}
                title="AI Image Generator"
                confirmAction={(
                    <Button onClick={accept} variant="primary" disabled={imageData ? false : true} >
                        Accept
                    </Button>
                )}
                size="xl"
            >
                <form onSubmit={submit}>
                <label title='Prompt'>Prompt:</label>
                <input style={{width:"100%", margin:"5px"}} type='text' value={promptString} disabled={generating} onChange={(e) => setPromptString(e.target.value)} />
                <Button onClick={submit} disabled={generating} variant="primary">
                    Generate Image
                </Button>
                </form>
                <br />
                {imageData ? (
                    <img src={`data:image/png;base64,${imageData}`} alt={imageData} />
                ) : generating ? (<div>Generating Image...</div>) : (<div>Click Generate Image to generate an Image based on the prompt.</div>)}
                {isError && (
                    <div className="text-danger-500 x-small">
                        {errorMessage}
                    </div>
                )}
            </BaseModal>
        </>
    );
};


export default AiModal
